const handler = (req, res) => {
  if (req.method === 'POST') {
    try {
      const formData = req.body
      res.status(200).json({ message: 'Заявка успешно отправлена' })
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при обработке запроса' })
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' })
  }
}
