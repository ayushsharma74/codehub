"use client"
import axios, { AxiosResponse } from "axios";

export default async (page?: number, limit?: number): Promise<AxiosResponse | void> => {
    
    return await axios.get(`/api/dsa_data?page=${page || 1}&limit=${limit || 25}`, { method: "GET" }).then(e => { return e }).catch(e => console.log(e))
}