module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            transpileTsFiles: {
                options: {
                    target: "es6",
                    module: "system",
                    moduleResolution: "node",
                    sourceMap: true,
                    emitDecoratorMetadata: true,
                    experimentalDecorators: true,
                    removeComments: false,
                    noImplicitAny: false
                },
                src: [ "app/**/*.ts"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask('install', ['ts:transpileTsFiles']);

    grunt.registerTask('default', ['install']);
};
