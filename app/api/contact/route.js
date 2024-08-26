import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// mail to my self
async function main(name, email, enquiry) {
    const info = await transporter.sendMail({
        from: `Iron Tribe <irontribemarketing@gmail.com>`,
        to: `${email}`,
        subject: `Thank you for contacting us, ${name}`,
        html: `<p style="font-family:Arial, sans-serif;font-size:16px;">Thank you for reaching out to me. <br><br> I have received your message and will get back to you soon.<br><br>Have a great day!<br><br>Best Regards,<br>Iron Tribe</p>`,
    });

    const info2 = await transporter.sendMail({
        from: `${name} <${email}>`,
        to: `irontribemarketing@gmail.com`,
        subject: `You have received a message from your website`,
        html: `<p style="font-family:Arial, sans-serif;font-size:16px;">You have received a message from <b>${name}</b> with email <a style="color:#337ab7;" href="mailto:${email}">${email}</a> with enquiry: <i style="font-style:italic;color:#337ab7;"> ${enquiry}</i></p>`,

    });

}



export const POST = async (req) => {
    const { name, email, enquiry } = await req.json()
    console.log(name, email, enquiry);
    try {
        console.log("env Data", process.env.EMAIL_ADDRESS, process.env.EMAIL_PASSWORD);
        await main(name, email, enquiry);
        return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ success: false }), { status: 500 })
    }
}

