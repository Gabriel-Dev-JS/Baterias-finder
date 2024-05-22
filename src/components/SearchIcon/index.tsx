import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface SearchIconProps {
    handleIcon: () => void;
}

export const SearchIcon = ({handleIcon}:SearchIconProps) => {
    return(
        <TouchableOpacity onPress={handleIcon} activeOpacity={0.9} >
            {<Feather name="search" size={24} color="black" />}
        </TouchableOpacity>
    )
}