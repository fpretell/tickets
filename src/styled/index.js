/** Import styled components library */
import styled from 'styled-components'

export const GetTicket = styled.span`
    display: block;
    border-radius: 5px;
    padding: 1rem;
    margin: 0.5rem auto;
    width: 20rem;
    background: transparent;
    color: grey;
    border: 1px solid #e4e4e4;
`
export const TicketTitle = styled.h2`
    font-weight: bold;
`

export const TicketsList = styled.div`
    background: #f7f7f7;
    padding 0.5rem;
`

export const TicketsAttend = styled(TicketsList)`
    background: #f7f7f7;
`

export const TicketItem = styled.div`
    color:black;
    font-weight: bold;
    border-bottom: 1px solid #e2e2e2;
    margin: auto;
    padding 1rem 0;
`

export const FormTicket = styled.div`
    color: blue;
    padding: 20px;
    background: #f7f7f7;
`

export const FormTitle = styled.h1`
    font-weight: bold;
    color: black;
    text-align: center;
    padding-top: 30px;
`

export const ActionTicket = styled.button`
    height: auto;
    background-color: #478af5;
    color : white;
    font-size: 20px;
    min-width: 20rem;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    padding: 12px;
    cursor: pointer;
    border: none;
    outline:none;
    &:active {
        border: none;
        outline:none;
    }
    &:hover {
        background-color: #3b59ed;
    }
`

export const Sectionticket = styled.div`
    height: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;
    height : 100%;
    flex-direction: column;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px 20px;
    text-align: center;
    margin-bottom: 10px;
`