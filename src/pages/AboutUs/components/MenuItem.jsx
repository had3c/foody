import StyleItem from '..//style/MenuItem.module.css'

export const MenuItem = ({ image, name, price }) => {
    return (
        <div className={StyleItem.menuItem}>
            <img src={image} alt={name} />
            <div className={StyleItem.itemInfo}>
                <h3>{name}</h3>
                <div className={StyleItem.rating}>★★★★★</div>
                <p>{price}</p>
            </div>
        </div>
    );
};