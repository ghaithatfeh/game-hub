import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-clients"
import Screenshot from "../entities/Screenshot"

const useScreenshot = (id: number) => {
    const apiClient = new APIClient<Screenshot>("/games/" + id + "/screenshots")
    return  useQuery({
        queryKey: ['screenshots', id],
        queryFn: apiClient.getAll
    })
}

export default useScreenshot;