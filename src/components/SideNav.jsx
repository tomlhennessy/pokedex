import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from 'react'

export default function SideNav(props) {
    const {selectedPokemon, setSelectedPokemon} = props

    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        // if full pokedex number includes the current search value, return true
        if (getFullPokedexNumber(eleIndex).includes(searchValue)) { return true }

        // if pokemon name includes current search value, return true
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) { return true }

        // otherwise, exclude value from the array
        return false
    })

    return (
        <nav>
            <div className="header">
                <h1 className="text-gradient">Pokédex</h1>
            </div>
            <input placeholder="E.g. 001 or Bulba..." value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} />
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon)
                return (
                    <button onClick={() => {
                        setSelectedPokemon(truePokedexNumber)
                    }} key={pokemonIndex} className={'nav-card' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : '')}>
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}
