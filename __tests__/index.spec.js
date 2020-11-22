(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.filesize', function () {
      var filename = '__tests__/index.html';
      console.log(nx.filesize(filename), nx.filesize(filename, { bits: true }));

      expect(nx.filesize(filename)).toBe('421B');
      expect(nx.filesize(filename, { bits: true })).toBe('3.29Kb');
    });
  });
})();
