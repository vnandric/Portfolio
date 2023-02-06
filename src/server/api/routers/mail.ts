import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";
import nodeMailer from "nodemailer";

export const mailRouter = createTRPCRouter({
    sendmail: publicProcedure.input(z.object({mailAdress: z.string().email()}).required())
    .mutation(({input}) => {
        console.log(`sendmail: ${input.mailAdress}`)
        const transporter = nodeMailer.createTransport({
            service: `gmail`,
            auth: {
                user: env.EMAIL_USER,
                pass: env.EMAIL_PASSWORD,
            }
        })
        const mailOptions = {
            from: env.EMAIL_USER,
            to: input.mailAdress,
            subject: `Gegevens Valentino Andric`,
            html: `Gegevens Valentino Andric: <br/><br/>
                <b>Mail:</b> Valentino Andric <br/>
                <b>Telefoon:</b> 06-37296714 <br/>
                <b>Adres:</b> Paradijsselpark 230, 2904 PA Capelle Aan Den IJssel <br/>
                <b>Geboortedatum:</b> 25-01-2004 <br/>`,
        }

        const sent = true

        transporter.sendMail(mailOptions,(error:any) => {
            if(error){
                return false
            }
        });
            
        // send mail
        return {success: sent}
    })
});
