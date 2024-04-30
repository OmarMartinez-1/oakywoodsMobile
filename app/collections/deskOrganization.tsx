import { desksOrganization } from '../../constants/constants'
import CollectionsScreen from '../../components/templates/CollectionsScreen'

function deskOrganization() {
  return (
    <CollectionsScreen dataScreens={desksOrganization} />
  )
}

export default deskOrganization
