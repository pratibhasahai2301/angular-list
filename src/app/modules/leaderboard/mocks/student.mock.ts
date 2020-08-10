import * as faker from 'faker';

import { Student } from '../models/student.model';

const numberOfStudents = 15;
export const STUDENTS: Student[] = loadStudents();

function loadStudents(): Student[] {
  const students: Student[] = [];
  for (let i = 0; i < numberOfStudents; i++) {
    students.push({
      id: `Stu${i}`,
      name: faker.name.findName(),
      photo: faker.image.imageUrl()
    });
  }

  students.push({
    id: 'Stu16',
    name: 'John Doe',
    photo: faker.image.imageUrl()
  });

  return students;
}
