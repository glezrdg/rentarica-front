import nodemailer from 'nodemailer'

export default async function handler(req: any, res: any) {
  console.log(process.env.EMAIL_PASS)
  if (req.method === 'POST') {
    const { name, email, message, number } = req.body

    // Configura el transporter con los detalles de tu servicio de email
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Cambia esto por tu servicio SMTP
      port: 587,
      secure: false, // true para puerto 465, false para otros puertos
      auth: {
        user: 'ventas@inaprd.com', // Tu usuario de correo
        pass: process.env.EMAIL_PASS, // Tu contraseña de correo
      },
    })

    try {
      // Enviar el correo
      await transporter.sendMail({
        from: '"Soporte" <ventas@inaprd.com>', // Cambia esto por tu nombre y correo
        to: 'ventas@inaprd.com', // Correo del destinatario
        subject: 'Nuevo mensaje de contacto', // Asunto del correo
        html: `
          <h1>Nuevo mensaje de contacto</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Numero:</strong> ${number}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      })

      res.status(200).json({ success: true })
    } catch (error) {
      console.error('Error enviando el correo: ', error)
      res.status(500).json({ error: 'Error enviando el correo' })
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' })
  }
}
