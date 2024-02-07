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
COPY --from=builder /workspace/package.json /app/
COPY --from=builder /workspace/.output /app/.output

# expose port
EXPOSE 3000

# run for production
CMD [ "node", "/app/.output/server/index.mjs"]