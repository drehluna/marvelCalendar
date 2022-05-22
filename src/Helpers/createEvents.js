import { getCharacters } from "../services/marvelCharacters";
import { GenerateRandomDate} from "./generateRandomDate";

export const pupoluteCalendar = async () => {
    const result = await getCharacters()

    const EventsArray = []

    const { results } = result.data

    results.forEach((item) => EventsArray.push({id: item.id, title: item.name, start: GenerateRandomDate(), end: GenerateRandomDate()}))
  
    return EventsArray
}
