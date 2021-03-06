var should = require("should")

var Duoshuo = require('../index')
var duoshuo = new Duoshuo({
  short_name: 'demo-shortname' // 这里必须是一个真实的 token
})

describe('API', function() {
  describe('#auth', function() {
    it('无效的 Code 必须被忽略', function(done) {
      duoshuo
        .auth('fakecode')
        .then(function(token) {
          var code = token.code
          var error = token.errorMessage
          code.should.equal(2)
          error.should.equal('Code不存在')
          done()
        })
    })
  })
  describe('#userProfile', function() {
    it('获取用户信息逻辑', function(done) {
    })
  })
  describe('#join', function() {
    it('将本地用户同步到远程数据库', function(done) {
    })
  })
  describe('#threads', function() {
    it('将帖子数据同步到远程数据库', function(done) {
    })
  })
  describe('#comments', function() {
    it('将评论同步到数据库', function(done) {
    })
  })
  describe('#tops', function() {
    it('获取热点数据', function(done) {
    })
  })
})
