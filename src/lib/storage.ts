export interface LessonResponses {
  [questionId: string]: string;
}

export interface ModuleResponses {
  [lessonId: string]: LessonResponses;
}

export interface UserData {
  email: string;
  nombre: string;
  dias_desde_ruptura: number;
  objetivo: 'reconquistar' | 'entender' | 'mejorar';
  // Módulo 1
  modulo_1_progreso: number;
  modulo_1_lecciones_completadas: number[];
  modulo_1_fecha_inicio: string;
  modulo_1_racha: number;
  modulo_1_ultimo_acceso: string;
  modulo_1_respuestas: ModuleResponses;
  // Módulo 2
  modulo_2_liberado: boolean;
  modulo_2_progreso: number;
  modulo_2_lecciones_completadas: number[];
  modulo_2_fecha_compra: string;
  modulo_2_racha: number;
  modulo_2_ultimo_acceso: string;
  modulo_2_respuestas: ModuleResponses;
  // Módulo 3
  modulo_3_liberado: boolean;
  modulo_3_progreso: number;
  modulo_3_lecciones_completadas: number[];
  modulo_3_fecha_compra: string;
  modulo_3_racha: number;
  modulo_3_ultimo_acceso: string;
  modulo_3_respuestas: ModuleResponses;
  // Programa completo
  programa_completado: boolean;
  fecha_certificado: string;
  // Gamificación
  badges: string[];
  puntos: number;
}

const STORAGE_KEY = 'prp_user_data';

export const getUser = (): UserData | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
};

export const saveUser = (user: UserData): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

export const updateUser = (updates: Partial<UserData>): UserData | null => {
  const user = getUser();
  if (!user) return null;
  const updatedUser = { ...user, ...updates };
  saveUser(updatedUser);
  return updatedUser;
};

export const createUser = (email: string): UserData => {
  const user: UserData = {
    email,
    nombre: '',
    dias_desde_ruptura: 0,
    objetivo: 'reconquistar',
    modulo_1_progreso: 0,
    modulo_1_lecciones_completadas: [],
    modulo_1_fecha_inicio: new Date().toISOString(),
    modulo_1_racha: 1,
    modulo_1_ultimo_acceso: new Date().toISOString(),
    modulo_1_respuestas: {},
    modulo_2_liberado: false,
    modulo_2_progreso: 0,
    modulo_2_lecciones_completadas: [],
    modulo_2_fecha_compra: '',
    modulo_2_racha: 0,
    modulo_2_ultimo_acceso: '',
    modulo_2_respuestas: {},
    modulo_3_liberado: false,
    modulo_3_progreso: 0,
    modulo_3_lecciones_completadas: [],
    modulo_3_fecha_compra: '',
    modulo_3_racha: 0,
    modulo_3_ultimo_acceso: '',
    modulo_3_respuestas: {},
    programa_completado: false,
    fecha_certificado: '',
    badges: [],
    puntos: 0,
  };
  saveUser(user);
  return user;
};

export const saveLessonResponses = (
  moduleNumber: 1 | 2 | 3,
  lessonId: number,
  responses: LessonResponses
): UserData | null => {
  const user = getUser();
  if (!user) return null;

  const moduleKey = `modulo_${moduleNumber}_respuestas` as keyof UserData;
  const currentResponses = (user[moduleKey] as ModuleResponses) || {};
  
  (user[moduleKey] as ModuleResponses) = {
    ...currentResponses,
    [lessonId.toString()]: responses
  };

  saveUser(user);
  return user;
};

export const getLessonResponses = (
  moduleNumber: 1 | 2 | 3,
  lessonId: number
): LessonResponses | null => {
  const user = getUser();
  if (!user) return null;

  const moduleKey = `modulo_${moduleNumber}_respuestas` as keyof UserData;
  const moduleResponses = (user[moduleKey] as ModuleResponses) || {};
  
  return moduleResponses[lessonId.toString()] || null;
};

export const completeLesson = (lessonId: number): UserData | null => {
  const user = getUser();
  if (!user) return null;

  if (!user.modulo_1_lecciones_completadas.includes(lessonId)) {
    user.modulo_1_lecciones_completadas.push(lessonId);
    user.modulo_1_progreso = Math.round((user.modulo_1_lecciones_completadas.length / 7) * 100);
    user.puntos += 100;

    // Add badge for completed lesson
    const badgeNames = [
      'Maestro del Diagnóstico',
      'Activador de Gatillos',
      'Estratega del Primer Contacto',
      'Maestro de la Escalación',
      'Dominador del Quiebre',
      'Experto en Cierre',
      'Guardián del Futuro'
    ];
    if (!user.badges.includes(badgeNames[lessonId - 1])) {
      user.badges.push(badgeNames[lessonId - 1]);
    }
  }

  // Update streak
  const today = new Date().toDateString();
  const lastAccess = new Date(user.modulo_1_ultimo_acceso).toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  if (lastAccess === yesterday) {
    user.modulo_1_racha += 1;
  } else if (lastAccess !== today) {
    user.modulo_1_racha = 1;
  }

  user.modulo_1_ultimo_acceso = new Date().toISOString();
  saveUser(user);
  return user;
};

export const getUserLevel = (progress: number): string => {
  if (progress >= 100) return 'Avanzado';
  if (progress >= 50) return 'Intermedio';
  return 'Principiante';
};

export const isOnboardingComplete = (): boolean => {
  const user = getUser();
  return user !== null && user.nombre !== '';
};

export const isAuthenticated = (): boolean => {
  const user = getUser();
  return user !== null && user.email !== '';
};

export const logout = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
