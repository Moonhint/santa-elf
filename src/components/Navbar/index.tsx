import useNavbarState from './states';
import NavbarView from './view';

const Navbar = () => {
    const { value, dispatcher } = useNavbarState();

    const onClicko = () => {
        dispatcher('add-one');
    }
    return (
        <NavbarView onClicko={onClicko} numb={value.numb}/>
    )
}

export default Navbar;