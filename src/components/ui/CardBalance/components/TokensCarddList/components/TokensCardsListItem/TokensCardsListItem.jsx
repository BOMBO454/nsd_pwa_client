import {TokensCardsListBorder, TokensCardsListItemWrapper, TokensListCost, TokensListIcon, TokensListText, TokensCardsListItemConteiner} from "./styled";


function TokensCardsListItem({icon}) {
    return(
        <TokensCardsListItemConteiner>
            <TokensCardsListItemWrapper>
                {icon && <TokensListIcon/>}
                <TokensListText>ООО “Импульс”</TokensListText>
                <TokensListCost>+574$</TokensListCost>
            </TokensCardsListItemWrapper>
            <TokensCardsListBorder/>
        </TokensCardsListItemConteiner>

    )
}

export default TokensCardsListItem