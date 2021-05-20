import React, { Component } from 'react';
import axios from 'axios';

export class CreateCharacter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            powers: [],
            characterName: '',
            characterGender: '',
            characterPowers: []
        }
    }

    componentDidMount = async () => {
        const powers = await axios.get(`${process.env.REACT_APP_SERVER_API}/api/powers`);
        this.setState({
            powers: powers.data
        })
    }

    handelCheckBoxValues = (e) => {
        if (e.target.checked) {
            this.setState({
                characterPowers: [...this.state.characterPowers, e.target.value]
            });
        } else {
            const index = this.state.characterPowers.indexOf(e.target.value);
            const arr = this.state.characterPowers.filter((val, idx) => idx !== index);
            this.setState({
                characterPowers: arr
            });
        }
    }

    createCharacter = async (e) => {
        e.preventDefault();
        const requestBody = {
            name: this.state.characterName,
            gender: this.state.characterGender,
            psi_powers: this.state.characterPowers

        }
        const res = await axios.post(`${process.env.REACT_APP_SERVER_API}/api/character`, requestBody);
        console.log(res);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.createCharacter}>
                    <fieldset>
                        <legend>
                            Add A new Character
                        </legend>
                        <label>Character</label>
                        <input type="text" onChange={(e) => { this.setState({ characterName: e.target.value }) }} />
                        <br />
                        <label>Gender</label>
                        <select onChange={
                            (e) => {
                                this.setState({
                                    characterGender: e.target.value
                                })
                            }
                        }>
                            <option value="">choose a gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <br />
                        <label>Power</label>
                        <br />
                        <>
                            {
                                this.state.powers.map((power, idx) => {
                                    return (
                                        <div key={idx}>
                                            <input onClick={this.handelCheckBoxValues} type="checkbox" id={power} name={power} value={power} />
                                            <label htmlFor={power}>{power}</label>
                                            <br />
                                        </ div>
                                    )
                                })
                            }
                        </>
                        <input type="submit" value="Submit" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default CreateCharacter
