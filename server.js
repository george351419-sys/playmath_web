import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: '163',
  auth: {
    user: 'aydenyan@163.com',
    pass: 'LHhydtKFx3x856x6'
  }
})

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body

  const mailOptions = {
    from: 'aydenyan@163.com',
    to: 'taobeixi@163.com',
    subject: `【PlayMath留言】${subject} - 来自${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF8C00; border-bottom: 2px solid #FF8C00; padding-bottom: 10px;">
          📨 PlayMath 网站留言
        </h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>👤 姓名：</strong>${name}</p>
          <p style="margin: 10px 0;"><strong>📧 邮箱：</strong>${email}</p>
          <p style="margin: 10px 0;"><strong>📝 主题：</strong>${subject}</p>
          <p style="margin: 10px 0;"><strong>💬 留言内容：</strong></p>
          <div style="background-color: #fff; padding: 15px; border-left: 4px solid #FF8C00; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p>此邮件由 PlayMath 网站自动发送</p>
          <p>发送时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
        </div>
      </div>
    `,
    text: `
【PlayMath 网站留言】

姓名：${name}
邮箱：${email}
主题：${subject}

留言内容：
${message}

---
此邮件由 PlayMath 网站自动发送
发送时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('邮件发送成功！')
    res.status(200).json({ success: true, message: '邮件发送成功' })
  } catch (error) {
    console.error('发送邮件时出错:', error)
    res.status(500).json({ success: false, message: '发送失败' })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 邮件服务已启动：http://localhost:${PORT}`)
  console.log('📧 等待接收留言...')
})
