
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { changeLangugae } from './redux/action';
import { useDispatch } from 'react-redux';
const Language = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('en');
    const [items, setItems] = useState([
        { label: 'English', value: 'en' },
        { label: 'Hindi', value: 'hi' }
    ]);

    useEffect(() => {
        dispatch(changeLangugae(value))
    }, [value])
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    );

}

export default Language
