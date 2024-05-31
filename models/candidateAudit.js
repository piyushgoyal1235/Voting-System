const mongoose = require('mongoose');

const candidateAuditSchema = new mongoose.Schema({
    candidateId: { type: mongoose.Schema.Types.ObjectId, required: true },
    oldData: { type: Object },
    newData: { type: Object },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CandidateAudit', candidateAuditSchema);
