import {gql} from '@apollo/client';

const CHAPTERS_QUERY = gql`
  query GetCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

export {CHAPTERS_QUERY};
