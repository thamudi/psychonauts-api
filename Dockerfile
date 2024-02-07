# set global args
ARG USER=node

###########
# BUILDER #
###########
FROM node:18.14.0 AS builder


# copy build context and install dependencinpm res
WORKDIR /workspace
COPY . .
RUN yarn install

# build NuxtJS project
RUN yarn build

###########
# PROJECT #
###########
FROM node:18-slim


# copy builder output to project workdir
WORKDIR /app
COPY --from=builder --chown=${USER}:${USER} /workspace/package.json /app/
COPY --from=builder --chown=${USER}:${USER} /workspace/.output /app/.output

# set user context
USER ${USER}

# expose port
EXPOSE ${PORT}

# run for production
CMD [ "node", "/app/.output/server/index.mjs"]