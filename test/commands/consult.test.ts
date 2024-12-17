import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('consult', () => {
  it('runs consult cmd', async () => {
    const {stdout} = await runCommand('consult')
    expect(stdout).to.contain('hello world')
  })

  it('runs consult --name oclif', async () => {
    const {stdout} = await runCommand('consult --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
