import "./filter.css";

const FILTER_URL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-';
const ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";

const Filter = ({styleCss, value, onClick}) => (
    <img
        className="filter-item"
        style={styleCss}
        src={ICON_URL + value}
        onClick={(event) => onClick(event)}
    />
);

export default Filter;
