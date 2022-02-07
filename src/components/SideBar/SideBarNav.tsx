import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import NavLink from "./NavLink"
import NavSection from "./NavSection"

export const SideBarNav = () => {

    return (
        <Stack spacing="12" align="flex-start">

        <NavSection title="GERAL">
            <NavLink icon={RiDashboardLine} href="/dashboard">DashBoard</NavLink>
            <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
            <NavLink icon={RiInputMethodLine} href="/forms">Formulário</NavLink>
            <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
        </NavSection>

    </Stack>
    )
}

export default SideBarNav