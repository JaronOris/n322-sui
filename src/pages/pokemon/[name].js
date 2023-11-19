import React from "react";
import { Router, useRouter } from "next/router";
import { Loader, Image, Grid, Divider, Placeholder } from "semantic-ui-react";
import homeStyle from "../../styles/Home.module.css";
import pokemonStyle from "../../styles/Pokemon.module.css";

export default function pokemonName() {
  const [pokemonInfo, setPokemonInfo] = React.useState({ loading: true });
  const router = useRouter();

  React.useEffect(function () {
    if (pokemonInfo.name !== router.query.name && router.query.name) {
      // console.log("Load in Pokemon info");
      fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
        .then((r) => r.json())
        .then((r) => {
          setPokemonInfo(r);
        })
        .catch((e) =>
          setPokemonInfo({ loading: false, name: router.query.name })
        );
    }
  });

  return (
    <>
      <div className={homeStyle.background}>
        <div className={homeStyle.banner}>
          <div className={homeStyle.columnContent}>
            <h1 className={pokemonStyle.entry}>
              Pokemon Name: {router.query.name}
            </h1>
            <Loader
              active={
                pokemonInfo.loading || pokemonInfo.name !== router.query.name
              }
            />
            {pokemonInfo.id ? (
              <>
                <Grid divided="vertically">
                  <Grid.Row columns={3} centered>
                    <Grid.Column>
                      <Image
                        className={pokemonStyle.pokePic}
                        src={pokemonInfo.sprites.other.home.front_default}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        className={pokemonStyle.pokePic}
                        src={pokemonInfo.sprites.other.home.front_shiny}
                      />
                    </Grid.Column>
                  </Grid.Row>

                  <Divider horizontal>Stats</Divider>

                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Placeholder
                        className={pokemonStyle.placeHolderContainer}
                        inverted
                      >
                        <Placeholder.Header className={pokemonStyle.statHolder}>
                          Stats coming soon!
                        </Placeholder.Header>
                      </Placeholder>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </>
            ) : (
              <>
                {isNaN(pokemonInfo.id) ? (
                  <h2>Searching...</h2>
                ) : (
                  <h2>Pokemon not found</h2>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
