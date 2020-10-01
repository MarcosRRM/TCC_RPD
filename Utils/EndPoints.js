const base = 'https://mapgt70q9b.execute-api.sa-east-1.amazonaws.com/default'

export default {
  NewAccount     : base+'/user',
  LogIn          : base+'/login',
  Sync           : base+'/rdt/sync',
  TestToken      : base+'/testtoken',
  UserRPDs       : base+'/person/rdt',
  ChangePassword : base+'/user/password',
  ResetPW        : base+'/user/password/reset'
}