import { getCharacters } from "../services/marvelCharacters";
import { GenerateRandomDate} from "./generateRandomDate";

export const pupoluteCalendar = async () => {
    const result = await getCharacters()
    const { results } = result.data

    const events = results.map((item) => ({id: item.id, title: item.name, start: GenerateRandomDate(), end: GenerateRandomDate()}))
    
    return events
}
