import chalk from "chalk"


const promptQrcode =[
    {
        name: "link",
        description: chalk.yellow("Enter the link to generate the QR code:")
    },
    {
        name: "type",
        description: chalk.yellow("QR Code (1--Normal ou (2--Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Choose only between 1 and 2."),
        required: true,
    }
]

export default promptQrcode;