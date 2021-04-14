import axios from "axios";

export const patientAPI={
    async getAll() {
        return await axios.get(`patient/`, )
            .then(res => res.data)
    },
    async create(data) {
        return await axios.post(`patient/`, {...data})
            .then(res => res.data)
    },
}

export const doctorAPI={
    async getAll() {
        return await axios.get(`doctor/`, )
            .then(res => res.data)
    },
    async create(data) {
        return await axios.post(`doctor/`, {...data})
            .then(res => res.data)
    },
}

export const dentalTechnicianAPI={
    async getAll() {
        return await axios.get(`dental_technician/`, )
            .then(res => res.data)
    },
    async create(data) {
        return await axios.post(`dental_technician/`, {...data})
            .then(res => res.data)
    },
}