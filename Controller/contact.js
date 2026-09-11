const Contact = require("../Models/contacts")


exports.addUsers =async (req,res)=>{
    try {
       const user = await Contact.findOne({email:req.body.email})
            if(user){
                return res.status(400).send({error:'user already exists'})
            }
       const contactAdd= new Contact(req.body)
       await contactAdd.save()
       res.status(201).send(contactAdd)

    } catch (error) {
        console.error(error)
       res.status(500).send({ error: 'Unable to add contact' })

    }

}
exports.getUsers = async(req,res)=>{
    try {

        const contacts = await Contact.find()

        res.status(200).send(contacts)
    } catch (error) {
        res.status(500).send('error')

    }
}
exports.updateUser = async(req,res)=>{
    try {
        const {id} = req.params
        const contact = await Contact.findByIdAndUpdate(id,{$set:req.body})

        res.status(200).send("done")

    } catch (error) {
        res.status(500).send( 'Unable to update contact' )
    }
}
exports.getUserById = async(req,res)=>{
    try {
        const {id} = req.params
        const contact = await Contact.findById(id)
        res.status(200).send(contact)
    } catch (error) {
        res.status(500).send('Unable to get contact')
    }

}
exports.deleteUser = async(req,res)=>{
    try {
        const {id}=req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).send("done")
    } catch (error) {
    res.status(500).send('error')
    }
}
