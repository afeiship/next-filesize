(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.filesize basic case', function () {
      var filename = '__tests__/index.html';
      expect(nx.filesize(filename)).toBe('421B');
      expect(nx.filesize(filename, { bits: true })).toBe('3.29Kb');
    });

    test('nx.filesize no format', function () {
      var filename = '__tests__/index.html';
      expect(nx.filesize(filename, { format: false })).toBe(421);
    });
  });
})();
