import REQUEST from "../../services/Request";

export const TRACKING= async (shipmentNumber) => {
    return await REQUEST({url:"/shipments/track/" + shipmentNumber})
}