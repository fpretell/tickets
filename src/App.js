/** React components  */
import React, { useState, useEffect } from 'react'

/** import styled components */
import { 
    GetTicket, TicketTitle, TicketsList, TicketsAttend,
    TicketItem, FormTicket, FormTitle, ActionTicket, Sectionticket 
} from './styled'

/** import io client */
import io from 'socket.io-client';

/** import elements from library Antd Framework */
import { Col, Row, Alert, Divider } from 'antd';

/** import css of antd */
import './App.css';

/** use socket server */
const socket = io('http://localhost:3011')

/** consts */
const prefix = 'TI-' /** handle prefix for tickets */

/** Component */
function App (props) {

    /** initial state */
    const templateState = {
        count: 0,
        tickets: [],
        attended: []
    }

    /** hooks */
    const [ticketsList, setTicketsList] = useState(templateState) /** handel state for tickets */
    const [newTicket, setNewticket] = useState()  /** handle */

    useEffect(()=>{
        /** subscribe to event */
        socket.on('message', message => {
            
            /** add tickets to list */
            if(message === 'push'){
                const newId = ticketsList.count+1
                const newTicket = prefix+newId
                setTicketsList({
                    ...ticketsList,
                    count: newId,
                    tickets: [
                        ...ticketsList.tickets,
                        newTicket
                    ]
                })
            }

            /** remove ticket of list (add to attended) */
            if(message === 'pop'){
                const [ first, ...rest ] = ticketsList.tickets
                /** attend first */
                if (first){
                    setTicketsList({
                        ...ticketsList,
                        tickets: rest,
                        attended: [
                            ...ticketsList.attended,
                            first
                        ]
                    })
                }
            }
          })

          /** unsubscribe to event at unmount */
          return () => {
            socket.off()
          };
    })


    /** handle get ticket */
    const handlePush = async e => {
        e.preventDefault()
        /** emit event push */
        socket.emit('message', 'push')
        /** increment count & set ticket added */
        const newId = prefix + (parseInt(ticketsList.count)+1)
        setNewticket(newId)
    }

    /** handle attended ticket */
    const handlePop = () => {
        /** emit event pop */
        socket.emit('message', 'pop')
    }

    /** render */
    return (
            <Sectionticket>
                
                {/* Ticket form */}
                <FormTitle>Ticket Form</FormTitle>
                <FormTicket>
                    <ActionTicket onClick={handlePush}>
                        Get Ticket
                    </ActionTicket>
                    {
                        /** Card ticket added */
                        newTicket && (
                            <GetTicket>
                                Your Ticket: <Alert message={newTicket} type="success" />
                            </GetTicket>
                        )
                    }
                </FormTicket>

                {/* Attend Ticket */}
                <Divider/>
                    <ActionTicket onClick={handlePop}>
                        Attend
                    </ActionTicket>
                <Divider/>

                {/* render lists */}
                <Row>
                    {/* Tickets in Queue */}
                    <Col span={12}>
                        <TicketTitle>Tickets</TicketTitle>
                        <TicketsList>
                        {
                            ticketsList.tickets.length
                                ?
                                    ticketsList.tickets.map( (ticket, index) => 
                                        <TicketItem key={index}>{ticket}</TicketItem>
                                    )
                                : 'No Tickets in Queue'
                        }
                        </TicketsList>
                    </Col>
                    {/* Tickets attended */}
                    <Col span={12}>
                        <TicketTitle>Attended</TicketTitle>
                        <TicketsAttend>
                                {/* <TicketItem >A004</TicketItem> */}
                            {
                                ticketsList.attended.length
                                ?
                                    ticketsList.attended.map( (ticket, index) => 
                                        <TicketItem key={index}>{ticket}</TicketItem>
                                    )
                                : 'No tickets attended'
                            }
                        </TicketsAttend>
                    </Col>
                </Row>
            </Sectionticket>
    )
}

export default App;
