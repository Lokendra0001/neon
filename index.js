const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

const insertData = async () => {
  try {
    await prisma.emp.create({
      data: {
        name: "Rakesh",
        email: "r@gmail.com",
        age: 24,
      },
    });
  } catch (e) {
    console.log(e.message);
  }
};

const insertMany = async () => {
  try {
    const data = [
      { name: "a", email: "a2@gmail.com", age: 20 },
      { name: "b", email: "b1@gmail.com", age: 30 },
    ];

    const addedData = await prisma.emp.createMany({
      data: [...data],
    });

    console.log(addedData);
  } catch (err) {
    console.log(err);
  }
};

const updateData = async () => {
  try {
    await prisma.emp.update({
      where: { id: 1 },
      data: { name: "raj" },
    });
  } catch (err) {
    console.log(err.message);
  }
};

const updateMany = async () => {
  try {
    const updatedA = await prisma.emp.updateMany({
      where: { name: "a" },
      data: { name: "modified_a" },
    });
    console.log(updatedA);
  } catch (err) {
    console.log(err);
  }
};

const getEmp = async () => {
  try {
    // const emp = await prisma.emp.findFirst({
    //   where: {
    //     article: {
    //       some: {},
    //     },
    //   },
    //   orderBy: {
    //     article: {
    //       createdAt : "desc",
    //     },
    //   },
    //   take: 5,
    // });

    // const emp = await prisma.emp.findMany({
    //   where: {
    //     article: {
    //       some: {},
    //     },
    //   },
    //   select: {
    //     id: true,
    //     article: {
    //       orderBy: {
    //         pname: "desc",
    //       },
    //       take: 1,
    //       select: {
    //         pname: true,
    //       },
    //     },
    //   },
    // });

    // const emp = await prisma.emp.findMany({
    //   where: {
    //     article: {
    //       some: {
    //         pname: {
    //           contains: "Intro",
    //         },
    //       },
    //     },
    //   },

    //   select: {
    //     id: true,
    //     article: {
    //       where: {
    //         pname: {
    //           contains: "Intro",
    //         },
    //       },
    //       select: {
    //         pname: true,
    //       },
    //       take: 1,
    //     },
    //   },
    // });

    const emp = await prisma.emp.findMany({
      select : {
        name : true,
        article : {
          select : {
            pname : true
          }
        }
      }
    })

    console.log(emp);
  } catch (err) {
    console.log(err);
  }
};

const deleteEmp = async () => {
  try {
    const emp = await prisma.emp.deleteMany({
      where: { email: { endsWith: "@gmail.com" }, name: "b" },
    });

    console.log(emp);
  } catch (error) {
    console.log(error);
  }
};

const sumOfId = async () => {
  try {
    const sum = await prisma.emp.aggregate({
      _avg: {
        id: true,
      },
      _sum: {
        id: true,
        age: true,
      },
    });
    console.log(sum);
  } catch (error) {
    console.log(error);
  }
};

const temp = async () => {
  try {
    await prisma.emp.upsert({
      where: { email: "r2@gmail.com" },
      update: {
        name: "don",
      },
      create: {
        name: "don",
        email: "r2@gmail.com",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
// insertData();

// insertMany();

// updateData();

// updateMany();

getEmp();

// deleteEmp()

// sumOfId();

// temp();

const insertPost = async () => {
  try {
    const posts = [
      { pname: "Intro to JavaScript", authorId: 2 },
      { pname: "Async Await Explained", authorId: 4 },
      { pname: "Node Basics", authorId: 5 },
      { pname: "Mongo Relations", authorId: 7 },
      { pname: "Prisma ORM", authorId: 8 },
      { pname: "REST APIs", authorId: 14 },
      { pname: "JWT Auth", authorId: 16 },
      { pname: "Docker Intro", authorId: 17 },
      { pname: "System Design", authorId: 21 },
    ];

    const res = await prisma.post.createMany({
      data: posts,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// insertPost();
