const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      peopleDetails: {},
      starships: [],
      planets: [],
      likes: [],
      detailCharacter: {},
      detailPlanet: {},
      fetchedPagesForPeople: [],
      fetchedPagesForPlanets: [],
      fetchedPagesForStarships: [],
      fetchedPagesForSpecies: [],
      fetchedPagesForVehicles: [],
      fetchedPagesForFilms: [],
      planetsDetails: {},
      starshipsDetails: {},
      species: [],
      speciesDetails: {},
      vehicles: [],
      vehiclesDetails: {},
      films: [],
    },
    actions: {
      fetchPeople: async function (page = 1) {
        const response = await fetch(
          `https://swapi.tech/api/people/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const peoplePromises = data.results.map(async (person) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/people/${person.uid}`
            );
            const detailsData = await detailsResponse.json();
            const personImage = `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`;
            return {
              ...person,
              ...detailsData.result.properties,
              image: personImage,
            };
          });
          const newPeople = await Promise.all(peoplePromises);
          const store = getStore();
          setStore({
            people: [...store.people, ...newPeople],
            fetchedPagesForPeople: [...store.fetchedPagesForPeople, page],
          });

          // Fetch details for each person
          newPeople.forEach((person) => this.fetchPeopleDetails(person.uid));
        } else {
          console.error(
            "Failed to fetch people:",
            response.status,
            response.statusText
          );
        }
      },

      fetchPeopleDetails: async function (uid) {
        const store = getStore();
        if (!store.peopleDetails[uid]) {
          const response = await fetch(`https://swapi.tech/api/people/${uid}`);
          if (response.ok) {
            const data = await response.json();
            if (data && data.result && data.result.properties) {
              const personImage = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;
              setStore({
                peopleDetails: {
                  ...store.peopleDetails,
                  [uid]: {
                    ...data.result.properties,
                    image: personImage,
                  },
                },
              });
            } else {
              console.error("Invalid response body:", data);
            }
          } else {
            console.error(
              "Failed to fetch person details:",
              response.status,
              response.statusText
            );
          }
        }
      },
      fetchPlanets: async function (page = 1) {
        const response = await fetch(
          `https://swapi.tech/api/planets/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const planetsPromises = data.results.map(async (planet) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/planets/${planet.uid}`
            );
            const detailsData = await detailsResponse.json();
            const planetImage = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;
            return {
              ...planet,
              ...detailsData.result.properties,
              image: planetImage,
            };
          });
          const newPlanets = await Promise.all(planetsPromises);
          const store = getStore();
          setStore({
            planets: [...store.planets, ...newPlanets],
            fetchedPagesForPlanets: [...store.fetchedPagesForPlanets, page],
          });
          newPlanets.forEach((planet) => this.fetchPlanetsDetails(planet.uid));
        } else {
          console.error(
            "Failed to fetch planets:",
            response.status,
            response.statusText
          );
        }
      },
      fetchPlanetsDetails: async function (uid) {
        const store = getStore();
        if (!store.planetsDetails[uid]) {
          const response = await fetch(`https://swapi.tech/api/planets/${uid}`);
          if (response.ok) {
            const data = await response.json();
            if (data && data.result && data.result.properties) {
              const planetImage = `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;
              setStore({
                planetsDetails: {
                  ...store.planetsDetails,
                  [uid]: {
                    ...data.result.properties,
                    image: planetImage,
                  },
                },
              });
            } else {
              console.error("Invalid response body:", data);
            }
          } else {
            console.error(
              "Failed to fetch planet details:",
              response.status,
              response.statusText
            );
          }
        }
      },
      fetchStarships: async function () {
        const response = await fetch("https://swapi.tech/api/starships/");
        if (response.ok) {
          const data = await response.json();
          setStore({
            starships: data.results,
          });
        } else {
          console.error(
            "Failed to fetch starships:",
            response.status,
            response.statusText
          );
        }
      },
      fetchStarshipsDetails: async function (uid) {
        const store = getStore();
        if (!store.starshipsDetails[uid]) {
          const response = await fetch(
            `https://swapi.tech/api/starships/${uid}`
          );
          if (response.ok) {
            const data = await response.json();
            if (data && data.result && data.result.properties) {
              setStore({
                starshipsDetails: {
                  ...store.starshipsDetails,
                  [uid]: data.result.properties,
                },
              });
            } else {
              console.error("Invalid response body:", data);
            }
          } else {
            console.error(
              "Failed to fetch starship details:",
              response.status,
              response.statusText
            );
          }
        }
      },
      fetchSpecies: async function () {
        const response = await fetch("https://swapi.tech/api/species/");
        if (response.ok) {
          const data = await response.json();
          setStore({
            species: data.results,
          });
        } else {
          console.error(
            "Failed to fetch species:",
            response.status,
            response.statusText
          );
        }
      },
      fetchSpeciesDetails: async function (uid) {
        const store = getStore();
        if (!store.speciesDetails[uid]) {
          const response = await fetch(`https://swapi.tech/api/species/${uid}`);
          if (response.ok) {
            const data = await response.json();
            if (data && data.result && data.result.properties) {
              setStore({
                speciesDetails: {
                  ...store.speciesDetails,
                  [uid]: data.result.properties,
                },
              });
            } else {
              console.error("Invalid response body:", data);
            }
          } else {
            console.error(
              "Failed to fetch species details:",
              response.status,
              response.statusText
            );
          }
        }
      },
      fetchVehicle: async function () {
        const response = await fetch("https://swapi.tech/api/vehicles/");
        if (response.ok) {
          const data = await response.json();
          setStore({
            vehicles: data.results,
          });
        } else {
          console.error(
            "Failed to fetch vehicles:",
            response.status,
            response.statusText
          );
        }
      },
      fetchVehicleDetails: async function (uid) {
        const store = getStore();
        if (!store.vehiclesDetails[uid]) {
          const response = await fetch(
            `https://swapi.tech/api/vehicles/${uid}`
          );
          if (response.ok) {
            const data = await response.json();
            if (data && data.result && data.result.properties) {
              setStore({
                vehiclesDetails: {
                  ...store.vehiclesDetails,
                  [uid]: data.result.properties,
                },
              });
            } else {
              console.error("Invalid response body:", data);
            }
          } else {
            console.error(
              "Failed to fetch vehicle details:",
              response.status,
              response.statusText
            );
          }
        }
      },
      fetchFilms: async function () {
        const response = await fetch("https://swapi.tech/api/films/");
        if (response.ok) {
          const data = await response.json();
          const films = await Promise.all(
            data.result.map(async (film) => {
              const response = await fetch(
                `https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`
              );
              let image = "";
              if (response.ok) {
                image = response.url;
              }
              return {
                uid: film.uid,
                created: film.properties.created,
                edited: film.properties.edited,
                producer: film.properties.producer,
                title: film.properties.title,
                episode_id: film.properties.episode_id,
                director: film.properties.director,
                release_date: film.properties.release_date,
                opening_crawl: film.properties.opening_crawl,
                image: image,
              };
            })
          );
          setStore({
            films: films,
          });
        } else {
          console.error(
            "Failed to fetch films:",
            response.status,
            response.statusText
          );
        }
      },
    },
  };
};

export default getState;
