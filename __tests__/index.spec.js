(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.filesize basic case', function () {
      var filename = '__tests__/index.html';
      const res = nx.filesize(filename);
      const res2 = nx.filesize(filename, { bits: true });
      expect(res.sizeOf).toBe('421B');
      expect(res2.sizeOf).toBe('3.29Kb');
      expect(res.size).toBe(421);
    });
  });
})();
