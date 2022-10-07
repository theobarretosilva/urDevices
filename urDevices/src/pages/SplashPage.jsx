import { AsideSplashPage } from "../components/AsideSplashPage/AsideSplashPage"
import { ImgAsideStyled } from "../components/ImgSplashPage/ImgSplashPage.styles"

export const SplashPage = () => {
    return(
        <>
            <AsideSplashPage />
            <ImgAsideStyled src="../../src/assets/imgs/devices.png"/>
        </>
    )
}