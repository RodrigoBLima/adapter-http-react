import User from "../infra/UserEntity"

test('Create a new user', function() {
  const user = new User('Name', 'email@email.com', 'cellphone')

  expect(user.name).toBe('Name')
  expect(user.email).toBe('email@email.com')
  expect(user.cellphone).toBe('cellphone')
})