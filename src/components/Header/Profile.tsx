import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {

    return (

        <Flex align="center">

            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Guilherme Amaral</Text>
                    <Text color="gray.300" fontSize="small">gui_lherme@hotmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Guilherme Amaral" src="https://github.com/GuilhermeAAmaral.png" />

        </Flex>

    )
}

export default Profile