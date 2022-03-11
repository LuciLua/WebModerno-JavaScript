export default function handler(req, res) {

    if (req.method === "GET") {
        handleGet(req, res)
    } else {
        res.status(405).send()
    }
}
// 405: Method not Allowed
function handleGet(req, res) {
    res.status(200).json({
        id: 1,
        nome: "Luci",
        idade: 20
    })
}