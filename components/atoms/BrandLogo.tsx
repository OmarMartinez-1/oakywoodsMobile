import { TouchableOpacity } from 'react-native-gesture-handler';
import { Svg, Path, G } from 'react-native-svg';
import { View } from './Themed';
import { Link } from 'expo-router';

function BrandLogoDark() {

  return (
    <View>
      <Link href='/' asChild>
        <TouchableOpacity>
          <Svg width="40" height="40" viewBox="0 0 120 120" ><G fill="none" fill-rule="evenodd"><Path d="M120 0v120H0V0h120ZM77.143 37.333H42.857l-.378.003C30.025 37.536 20 47.61 20 60.016c0 12.405 10.025 22.478 22.479 22.678l.378.003h11.429l22.857-45.364Zm22.857 0H77.143v45.364L100 37.333Z" fill="#1A1A1A"></Path></G></Svg>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

function BrandLogoLight() {
  return (
    <View>
      <Link href='/' asChild>
        <TouchableOpacity>
          <Svg width="60" height="34" viewBox="0 0 60 34"><G fill="none" fill-rule="evenodd"><G fill="#1A1A1A" fill-rule="nonzero"><Path d="M17.143 0C7.67 0 0 7.613 0 17.011c0 9.4 7.671 17.012 17.143 17.012h8.571L42.857 0H17.143ZM60 0H42.857v34.023z"></Path></G></G></Svg>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export { BrandLogoLight, BrandLogoDark }

