const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      peopleDetails: {},
      starships: [],
      starshipsDetails: {},
      planets: [],
      planetsDetails: {},
      likes: [],
      species: [],
      speciesDetails: {},
      vehicles: [],
      vehiclesDetails: {},
      films: [],
      detailCharacter: {},
      detailPlanet: {},
      fetchedPagesForPeople: [],
      fetchedPagesForPlanets: [],
      fetchedPagesForStarships: [],
      fetchedPagesForSpecies: [],
      fetchedPagesForVehicles: [],
      fetchedPagesForFilms: [],
    },
    actions: {
      fetchPeople: async function (page = 1) {
        const store = getStore();
        if (store.fetchedPagesForPeople.includes(page)) {
          // If the page has already been fetched, do nothing
          return;
        }
        const response = await fetch(
          `https://swapi.tech/api/people/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const peoplePromises = data.results.map(async (person) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/people/${person.uid}`
            );
            if (detailsResponse.ok) {
              const detailsData = await detailsResponse.json();
              const personImage = `https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`;
              return {
                ...person,
                ...detailsData.result.properties,
                image: personImage,
              };
            } else {
              console.error(
                "Failed to fetch person details:",
                detailsResponse.status,
                detailsResponse.statusText
              );
              return person; // return the person data without details in case of error
            }
          });
          const newPeople = await Promise.all(peoplePromises);
          setStore({
            people: [...store.people, ...newPeople],
            fetchedPagesForPeople: [...store.fetchedPagesForPeople, page],
          });
        } else {
          console.error(
            "Failed to fetch people:",
            response.status,
            response.statusText
          );
        }
      },

      fetchPlanets: async function (page = 1) {
        const store = getStore();
        if (store.fetchedPagesForPlanets.includes(page)) {
          // If the page has already been fetched, do nothing
          return;
        }
        const response = await fetch(
          `https://swapi.tech/api/planets/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const planetsPromises = data.results.map(async (planet) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/planets/${planet.uid}`
            );
            if (detailsResponse.ok) {
              const detailsData = await detailsResponse.json();
              const planetImage = `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;
              return {
                ...planet,
                ...detailsData.result.properties,
                image: planetImage,
              };
            } else {
              console.error(
                "Failed to fetch planet details:",
                detailsResponse.status,
                detailsResponse.statusText
              );
              return planet; // return the planet data without details in case of error
            }
          });
          const newPlanets = await Promise.all(planetsPromises);
          setStore({
            planets: [...store.planets, ...newPlanets],
            fetchedPagesForPlanets: [...store.fetchedPagesForPlanets, page],
          });
        } else {
          console.error(
            "Failed to fetch planets:",
            response.status,
            response.statusText
          );
        }
      },

      fetchStarships: async function (page = 1) {
        const store = getStore();
        if (store.fetchedPagesForStarships.includes(page)) {
          // If the page has already been fetched, do nothing
          return;
        }
        const response = await fetch(
          `https://swapi.tech/api/starships/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const starshipPromises = data.results.map(async (starship) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/starships/${starship.uid}`
            );
            if (detailsResponse.ok) {
              const detailsData = await detailsResponse.json();
              const starshipImageResponse = await fetch(
                `https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`
              );
              const starshipImageBlob = await starshipImageResponse.blob();
              const starshipImage = URL.createObjectURL(starshipImageBlob);
              return {
                ...starship,
                ...detailsData.result.properties,
                image: starshipImage,
              };
            } else {
              console.error(
                "Failed to fetch starship details:",
                detailsResponse.status,
                detailsResponse.statusText
              );
              return starship; // return the starship data without details in case of error
            }
          });
          const newStarships = await Promise.all(starshipPromises);
          setStore({
            starships: [...store.starships, ...newStarships],
            fetchedPagesForStarships: [...store.fetchedPagesForStarships, page],
          });
        } else {
          console.error(
            "Failed to fetch starships:",
            response.status,
            response.statusText
          );
        }
      },

      fetchSpecies: async function (page = 1) {
        const store = getStore();
        if (store.fetchedPagesForSpecies.includes(page)) {
          return;
        }
        const response = await fetch(
          `https://swapi.tech/api/species/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const speciesPromises = data.results.map(async (specie) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/species/${specie.uid}`
            );
            if (detailsResponse.ok) {
              const detailsData = await detailsResponse.json();
              const specieImage = `https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`;
              return {
                ...specie,
                ...detailsData.result.properties,
                image: specieImage,
              };
            } else {
              console.error(
                "Failed to fetch specie details:",
                detailsResponse.status,
                detailsResponse.statusText
              );
              return specie; // return the specie data without details in case of error
            }
          });
          const newSpecies = await Promise.all(speciesPromises);
          setStore({
            species: [...store.species, ...newSpecies],
            fetchedPagesForSpecies: [...store.fetchedPagesForSpecies, page],
          });
        } else {
          console.error(
            "Failed to fetch species:",
            response.status,
            response.statusText
          );
        }
      },

      fetchVehicle: async function (page = 1) {
        const store = getStore();
        if (store.fetchedPagesForVehicles.includes(page)) {
          // If the page has already been fetched, do nothing
          return;
        }
        const response = await fetch(
          `https://swapi.tech/api/vehicles/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const vehiclePromises = data.results.map(async (vehicle) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/vehicles/${vehicle.uid}`
            );
            if (detailsResponse.ok) {
              const detailsData = await detailsResponse.json();
              const vehicleImage = `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`;
              return {
                ...vehicle,
                ...detailsData.result.properties,
                image: vehicleImage,
              };
            } else {
              console.error(
                "Failed to fetch vehicle details:",
                detailsResponse.status,
                detailsResponse.statusText
              );
              return vehicle; // return the vehicle data without details in case of error
            }
          });
          const newVehicles = await Promise.all(vehiclePromises);
          setStore({
            vehicles: [...store.vehicles, ...newVehicles],
            fetchedPagesForVehicles: [...store.fetchedPagesForVehicles, page],
            vehicleDetails: {
              ...store.vehicleDetails,
              ...newVehicles.reduce((acc, vehicle) => {
                acc[vehicle.uid] = vehicle;
                return acc;
              }, {}),
            },
          });
        } else {
          console.error(
            "Failed to fetch vehicles:",
            response.status,
            response.statusText
          );
        }
      },

      fetchFilms: async function (page = 1) {
        const store = getStore();
        if (store.fetchedPagesForFilms.includes(page)) {
          // If the page has already been fetched, do nothing
          return;
        }
        const response = await fetch(
          `https://swapi.tech/api/films/?page=${page}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          const filmsPromises = data.result.map(async (film) => {
            const detailsResponse = await fetch(
              `https://swapi.tech/api/films/${film.uid}`
            );
            if (detailsResponse.ok) {
              const detailsData = await detailsResponse.json();
              const filmImage = `https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`;
              return {
                ...film,
                ...detailsData.result.properties,
                image: filmImage,
              };
            } else {
              console.error(
                "Failed to fetch film details:",
                detailsResponse.status,
                detailsResponse.statusText
              );
              return film; // return the film data without details in case of error
            }
          });
          const newFilms = await Promise.all(filmsPromises);
          setStore({
            films: [...store.films, ...newFilms],
            fetchedPagesForFilms: [...store.fetchedPagesForFilms, page],
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
