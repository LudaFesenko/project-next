import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;
export default getQueryClient;

// Функція яка використовується на сервері і створює QueryClient один раз на запит
// Гарантує, що дані не будуть розподілятися між різними користувачами та запитами
