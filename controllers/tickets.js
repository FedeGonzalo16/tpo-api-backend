const TicketService = require('../services/tickets');

const getTickets = async(req,res) =>{
    try{
        const tickets = await TicketService.getTickets();
        res.status(200).json(tickets);
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

const getTicketById = async(req,res) =>{
    const{
        id
    } = req.params;
    try{
        const ticket = await TicketService.getTicketsById(Number(id));
        if(!ticket) res.status(404).json({
            message: "Ticket Not Found"
        });
        res.status(200).json(ticket);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

    const createTickets = async(req,res) =>{
    try{
        const ticket = await TicketService.createTicket(req.body);
            res.status(200).json(ticket);
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports ={
    getTickets,
    getTicketById,
    createTickets
}
