import { useTranslation } from "react-i18next";

export default function HighLineText(){
    const { t, i18n } = useTranslation();
    return(
        <div className="container" style={{textAlign : "center" , padding:"80px"}}>
            <h4>{t("track your shipment")}</h4>
            </div>
    )
}