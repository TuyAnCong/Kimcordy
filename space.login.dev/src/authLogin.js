module.export(res, auth, app) => {
res.get('/login?token', auth => {
auth.GetData('token', authTOKEN)
auth.alert('Server Will Logining With Token', ok=window.open('/home/dashboard'))
})
}
