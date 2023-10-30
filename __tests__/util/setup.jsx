import { afterEach, afterAll, beforeAll, vi } from 'vitest'
import { cleanup, configure } from '@testing-library/react'
import { server } from './mocks/server'
import '@testing-library/jest-dom'

vi.mock('next/router', () => ({
  useRouter: () => mockRouter
}))

// Mock Next's Link Component because it does NOT render correctly with testing-library
vi.mock('next/link', () => ({default: ({children, ...props}) => <a {...props}>{children}</a>}))

configure({
  getElementError: (message, container) => {
    const error = new Error(message);
    error.name = 'TestingLibraryElementError';
    error.stack = null;
    return error;
  },
});

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => {
  server.close()
  vi.restoreAllMocks()
})

afterEach(() => {
  server.resetHandlers()
  vi.clearAllMocks()
  cleanup()
})

export const mockRouter = {
  query: {id: null},
  push: vi.fn(),
  replace: vi.fn(),
  asPath: null,
  pathname: null,
  back: vi.fn()
}
