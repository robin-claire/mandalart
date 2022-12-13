import { vi } from 'vitest';
import { saveItem, loadItem } from '../storage';

describe('storage', () => {
  vi.spyOn(window.localStorage.__proto__, 'setItem');

  beforeEach(() => {
    window.localStorage.__proto__.setItem = vi.fn();
    window.localStorage.__proto__.getItem = vi.fn();
  });

  describe('saveItem', () => {
    it('calls localStorage setItem', () => {
      saveItem('key', 'value');

      expect(localStorage.setItem).toBeCalledWith('key', 'value');
    });
  });

  describe('loadItem', () => {
    it('calls localStorage getItem', () => {
      loadItem('key');

      expect(localStorage.getItem).toBeCalledWith('key');
    });
  });
});