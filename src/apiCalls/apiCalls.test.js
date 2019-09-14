import { fetchParks } from "./apiCalls";

describe('fetchParks', () => {

    let mockResponse;
    beforeEach(() => {

      mockResponse = [
        {
          "states": "DC",
          "directionsInfo": "The memorial is located at the corner of...",
          "directionsUrl": "http://www.nps.gov/afam/planyourvisit/directions.htm",
          "url": "https://www.nps.gov/afam/index.htm",
          "weatherInfo": "Washington DC gets to see all four seasons...",
          "name": "African American Civil War Memorial",
          "latLong": "lat:38.916554, long:-77.025977",
          "description": "Over 200,000 African-American soldiers...",
          "designation": "",
          "parkCode": "afam",
          "id": "1A47416F-DAA3-4137-9F30-14AF86B4E547",
          "fullName": "African American Civil War Memorial",
          "type": "parks",
          "images": [
            {
              "credit": "NPS Photo",
              "altText": "Site Statue",
              "title": "African American Civil War Statue",
              "id": "3406",
              "caption": "A poignant reminder of our nations past",
              "url": "https://www.nps.gov/common/uploads/structured_data/3C816B50-1DD8-B71B-0BF380049FB6B6A2.jpg"
            }
          ]
        }
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    it("should call fetch with the correct url HAPPY", () => {
      fetchParks();
      expect(window.fetch).toHaveBeenCalledWith(
        `https://developer.nps.gov/api/v1/parks?api_key=QomvgsvmorPYvw6JPfQ2Puk6z7iasUP1tR7gloBQ`
      );
    });

    it("should return an array of park objects HAPPY", () => {
      expect(fetchParks()).resolves.toEqual(mockResponse);
    });

    it("should return an error if response is not okay SAD", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      const result = fetchParks();
      expect(result).rejects.toEqual(
        Error("There was an error loading the parks")
      );
    });

    it("should return an error if the promise rejects SAD", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          message: "The server is down."
        })
      });
      const result = fetchParks();
      expect(result).rejects.toEqual({
        message: "The server is down."
      });
    });
  });